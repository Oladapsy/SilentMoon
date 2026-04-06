import { ScrollView } from "react-native";
import React, { ComponentType, useState } from "react";
import FilterItem from "./FilterItem";

// the svgs sliders
import AllIcon from "@/assets/svg/tabs/meditate/mediate1.svg";
import MyIcon from "@/assets/svg/tabs/meditate/mediate2.svg";
import AnxiousIcon from "@/assets/svg/tabs/meditate/mediate3.svg";
import SleepIcon from "@/assets/svg/tabs/meditate/meditate4.svg";
import KidsIcon from "@/assets/svg/tabs/meditate/mediatate5.svg";
import { lightColors } from "@/src/theme/colors";

export interface FilterType {
  id: number;
  label: string;
  icon: ComponentType<{ width: number; height: number; color: string }>;
}

export const meditateFilters: FilterType[] = [
  { id: 1, label: "All", icon: AllIcon },
  { id: 2, label: "My", icon: MyIcon },
  { id: 3, label: "Anxious", icon: AnxiousIcon },
  { id: 4, label: "Sleep", icon: SleepIcon },
  { id: 5, label: "Kids", icon: KidsIcon },
];

interface MediateFilterProps {
  activeLabelColor?: string;
  inactiveIconBg?: string;
}
export default function MediateFilter({
  activeLabelColor, inactiveIconBg,
}: MediateFilterProps) {
  const [activeId, setActiveId] = useState(1);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 20, gap: 16 }}
    >
      {meditateFilters.map((filter) => (
        <FilterItem
          key={filter.id}
          label={filter.label}
          inactiveIconBg={inactiveIconBg}
          icon={
            <filter.icon
              width={28}
              height={28}
              color={
                activeId === filter.id ? "white" : lightColors.iconInactive
              }
            />
          }
          isActive={activeId === filter.id}
          onPress={() => setActiveId(filter.id)}
          activeLabelColor={activeLabelColor}
        />
      ))}
    </ScrollView>
  );
}
