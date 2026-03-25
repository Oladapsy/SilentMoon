import React, { useRef, useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";

const ITEM_HEIGHT = 45;
const VISIBLE_ITEMS = 5;
const PICKER_HEIGHT = ITEM_HEIGHT * VISIBLE_ITEMS;

const hours = Array.from({ length: 12 }, (_, i) =>
  String(i + 1).padStart(2, "0"),
);
const minutes = Array.from({ length: 60 }, (_, i) =>
  String(i).padStart(2, "0"),
);
const periods = ["AM", "PM"];

interface ColumnProps {
  data: string[];
  initialIndex?: number;
  onChange?: (value: string) => void;
  width: number;
}

function PickerColumn({
  data,
  initialIndex = 0,
  onChange,
  width,
}: ColumnProps) {
  const scrollRef = useRef<ScrollView>(null);
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);

  const handleScrollEnd = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetY = e.nativeEvent.contentOffset.y;
      const index = Math.round(offsetY / ITEM_HEIGHT);
      const clampedIndex = Math.max(0, Math.min(index, data.length - 1));
      setSelectedIndex(clampedIndex);
      onChange?.(data[clampedIndex]);
      scrollRef.current?.scrollTo({
        y: clampedIndex * ITEM_HEIGHT,
        animated: true,
      });
    },
    [data, onChange],
  );

  return (
    <View style={[styles.column, { width }]}>
      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        onMomentumScrollEnd={handleScrollEnd}
        contentOffset={{ x: 0, y: initialIndex * ITEM_HEIGHT }}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingVertical: ITEM_HEIGHT * 2 }}
      >
        {data.map((item, index) => {
          const distance = Math.abs(index - selectedIndex);
          const opacity = distance === 0 ? 1 : distance === 1 ? 0.45 : 0.2;
          const fontSize = distance === 0 ? 24 : distance === 1 ? 20 : 17;
          const fontWeight = distance === 0 ? "700" : "400";
          return (
            <View key={`${item}-${index}`} style={styles.item}>
              <Text
                style={[styles.itemText, { opacity, fontSize, fontWeight }]}
              >
                {item}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

interface TimeSelectorProps {
  onChange?: (time: { hour: string; minute: string; period: string }) => void;
}

export default function TimeSelector({ onChange }: TimeSelectorProps) {
  const [hour, setHour] = useState("11");
  const [minute, setMinute] = useState("30");
  const [period, setPeriod] = useState("AM");

  const handleHourChange = (val: string) => {
    setHour(val);
    onChange?.({ hour: val, minute, period });
  };
  const handleMinuteChange = (val: string) => {
    setMinute(val);
    onChange?.({ hour, minute: val, period });
  };
  const handlePeriodChange = (val: string) => {
    setPeriod(val);
    onChange?.({ hour, minute, period: val });
  };

  return (
    <View style={styles.container}>
      {/* Selection highlight */}
      <View style={styles.selectionHighlight} pointerEvents="none" />

      <PickerColumn
        data={hours}
        initialIndex={10} // "11"
        onChange={handleHourChange}
        width={80}
      />
      <PickerColumn
        data={minutes}
        initialIndex={30}
        onChange={handleMinuteChange}
        width={80}
      />
      <PickerColumn
        data={periods}
        initialIndex={0}
        onChange={handlePeriodChange}
        width={80}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: PICKER_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0F0F5",
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
  },
  selectionHighlight: {
    position: "absolute",
    top: ITEM_HEIGHT * 2,
    left: 16,
    right: 16,
    height: ITEM_HEIGHT,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#CECEDE",
    zIndex: 10,
  },
  column: {
    height: PICKER_HEIGHT,
    overflow: "hidden",
    alignItems: "center",
  },
  item: {
    height: ITEM_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
  },
  itemText: {
    color: "#1A1A2E",
    letterSpacing: 0.5,
  },
});
