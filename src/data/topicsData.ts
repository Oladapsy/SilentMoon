// the image SVGs for the cards
// import your SVGs
import ReduceStressSvg from "@/assets/svg/topic/ReduceStress.svg";
import ImprovePerformanceSvg from "@/assets/svg/topic/ImprovePerformance.svg";
import IncreaseHappinessSvg from "@/assets/svg/topic/IncreaseHappiness.svg";
import ReduceAnxietySvg from "@/assets/svg/topic/ReduceAnxiety.svg";
import PersonalGrowthSvg from "@/assets/svg/topic/PersonalGrowth.svg";
import BetterSleepSvg from "@/assets/svg/topic/BetterSleep.svg";
import { lightColors } from "@/src/theme/colors"; 

// the data for card
export const LEFT_COLUMN = [
  {
    id: "1",
    title: "Reduce Stress",
    color: lightColors.card1,
    image: ReduceStressSvg,
    height: 210, // taller card
    textColor: lightColors.welcomeText,
  },
  {
    id: "3",
    title: "Increase\nHappiness",
    color: lightColors.card3,
    image: IncreaseHappinessSvg,
    height: 167, // shorter card
    textColor: lightColors.primary,
  },
  {
    id: "5",
    title: "Personal\nGrowth",
    color: lightColors.card5,
    image: PersonalGrowthSvg,
    height: 210,
    textColor: lightColors.welcomeText,
  },
  {
    id: "7",
    title: "Improve\nPerformance",
    color: lightColors.card2,
    image: ImprovePerformanceSvg,
    height: 167,
    textColor: lightColors.cardText2,
  },
  {
    id: "8",
    title: "Reduce Anxiety",
    color: lightColors.card4,
    image: ReduceAnxietySvg,
    height: 210,
  },
  {
    id: "9",
    title: "Better Sleep",
    color: lightColors.card6,
    image: BetterSleepSvg,
    height: 167,
    textColor: lightColors.navBorder,
  },
];

export const RIGHT_COLUMN = [
  {
    id: "2",
    title: "Improve\nPerformance",
    color: lightColors.card2,
    image: ImprovePerformanceSvg,
    height: 167,
    textColor: lightColors.cardText2,
  },
  {
    id: "4",
    title: "Reduce Anxiety",
    color: lightColors.card4,
    image: ReduceAnxietySvg,
    height: 210,
  },
  {
    id: "6",
    title: "Better Sleep",
    color: lightColors.card6,
    image: BetterSleepSvg,
    height: 167,
    textColor: lightColors.navBorder,
  },
  {
    id: "8",
    title: "Reduce Stress",
    color: lightColors.card1,
    image: ReduceStressSvg,
    height: 210, // taller card
    textColor: lightColors.welcomeText,
  },
  {
    id: "10",
    title: "Increase\nHappiness",
    color: lightColors.card3,
    image: IncreaseHappinessSvg,
    height: 167, // shorter card
    textColor: lightColors.primary,
  },
  {
    id: "12",
    title: "Personal\nGrowth",
    color: lightColors.card5,
    image: PersonalGrowthSvg,
    height: 210,
    textColor: lightColors.welcomeText,
  },
];