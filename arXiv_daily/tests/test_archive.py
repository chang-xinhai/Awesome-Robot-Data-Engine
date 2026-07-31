import sys
import unittest
from pathlib import Path

import yaml


ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from fetch_arxiv import classify_paper  # noqa: E402


class ClassifierTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.config = yaml.safe_load((ROOT / "config.yaml").read_text())

    def classify(self, title, abstract):
        return classify_paper({"title": title, "abstract": abstract, "comment": None}, self.config)[0]

    def test_automoma_is_simulation_candidate(self):
        topics = self.classify(
            "Scalable Trajectory Generation for Whole-Body Mobile Manipulation",
            "AutoMoMa uses parallelized trajectory optimization to generate a dataset of 500k physically valid trajectories.",
        )
        self.assertIn("simulation", topics)

    def test_universal_manipulation_interface(self):
        topics = self.classify(
            "Universal Manipulation Interface",
            "A handheld gripper for robot-free demonstration collection.",
        )
        self.assertIn("umi", topics)
        self.assertIn("robot_centric", topics)

    def test_egocentric_human_video(self):
        topics = self.classify(
            "Learning Robot Skills from Egocentric Human Video",
            "We recover hand-object interaction and retarget it to a robot.",
        )
        self.assertIn("human_egocentric", topics)

    def test_non_robot_human_in_the_loop_is_rejected(self):
        topics = self.classify(
            "Cost-Sensitive Conformal Prediction with Human-in-the-Loop Abstention",
            "A clinical decision support benchmark for high-stakes classification.",
        )
        self.assertNotIn("robot_centric", topics)

    def test_non_robot_digital_twin_is_rejected(self):
        topics = self.classify(
            "A Digital Twin Platform for Indoor mmWave Radar",
            "A signal-level simulator for wireless sensing.",
        )
        self.assertNotIn("simulation", topics)


if __name__ == "__main__":
    unittest.main()
