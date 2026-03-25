// the image SVGs for the cards
// import your SVGs
import ReduceStressSvg from "@/assets/svg/topic/ReduceStress.svg";
import ImprovePerformanceSvg from "@/assets/svg/topic/ImprovePerformance.svg";
import IncreaseHappinessSvg from "@/assets/svg/topic/IncreaseHappiness.svg";
import ReduceAnxietySvg from "@/assets/svg/topic/ReduceAnxiety.svg";
import PersonalGrowthSvg from "@/assets/svg/topic/PersonalGrowth.svg";
import BetterSleepSvg from "@/assets/svg/topic/BetterSleep.svg";
import { colors } from "@/src/theme/colors"; 

// the data for card
export const LEFT_COLUMN = [
  {
    id: "1",
    title: "Reduce Stress",
    color: colors.card1,
    image: ReduceStressSvg,
    height: 210, // taller card
    textColor: colors.welcomeText,
  },
  {
    id: "3",
    title: "Increase\nHappiness",
    color: colors.card3,
    image: IncreaseHappinessSvg,
    height: 167, // shorter card
    textColor: colors.primary,
  },
  {
    id: "5",
    title: "Personal\nGrowth",
    color: colors.card5,
    image: PersonalGrowthSvg,
    height: 210,
    textColor: colors.welcomeText,
  },
  {
    id: "7",
    title: "Improve\nPerformance",
    color: colors.card2,
    image: ImprovePerformanceSvg,
    height: 167,
    textColor: colors.cardText2,
  },
  {
    id: "8",
    title: "Reduce Anxiety",
    color: colors.card4,
    image: ReduceAnxietySvg,
    height: 210,
  },
  {
    id: "9",
    title: "Better Sleep",
    color: colors.card6,
    image: BetterSleepSvg,
    height: 167,
    textColor: colors.navBorder,
  },
];

export const RIGHT_COLUMN = [
  {
    id: "2",
    title: "Improve\nPerformance",
    color: colors.card2,
    image: ImprovePerformanceSvg,
    height: 167,
    textColor: colors.cardText2,
  },
  {
    id: "4",
    title: "Reduce Anxiety",
    color: colors.card4,
    image: ReduceAnxietySvg,
    height: 210,
  },
  {
    id: "6",
    title: "Better Sleep",
    color: colors.card6,
    image: BetterSleepSvg,
    height: 167,
    textColor: colors.navBorder,
  },
  {
    id: "8",
    title: "Reduce Stress",
    color: colors.card1,
    image: ReduceStressSvg,
    height: 210, // taller card
    textColor: colors.welcomeText,
  },
  {
    id: "10",
    title: "Increase\nHappiness",
    color: colors.card3,
    image: IncreaseHappinessSvg,
    height: 167, // shorter card
    textColor: colors.primary,
  },
  {
    id: "12",
    title: "Personal\nGrowth",
    color: colors.card5,
    image: PersonalGrowthSvg,
    height: 210,
    textColor: colors.welcomeText,
  },
];