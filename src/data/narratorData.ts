interface Narrator {
  id: number;
  title: string;
  duration: string;
  subtitle?: string;
  newDuration: string,
}

// narratorData.ts
export const maleNarrators: Narrator[] = [
  { id: 1, title: "Focus Attention", duration: "10 MIN", subtitle: "7 DAYS OF CALM", newDuration: '10:30'  },
  { id: 2, title: "Body Scan", duration: "5 MIN", subtitle: "7 DAYS OF CALM", newDuration: '5:30'  },
  { id: 3, title: "Making Happiness", duration: "3 MIN", subtitle: "7 DAYS OF CALM", newDuration: '3:30'  },
  { id: 5, title: "Focus Attention", duration: "10 MIN", subtitle: "7 DAYS OF CALM", newDuration: '10:30'  },
  { id: 6, title: "Body Scan", duration: "5 MIN", subtitle: "7 DAYS OF CALM", newDuration: '5:30'  },
  { id: 7, title: "Making Happiness", duration: "3 MIN", subtitle: "7 DAYS OF CALM", newDuration: '3:30'  },
];

export const femaleNarrators: Narrator[] = [
  { id: 1, title: "Female Focus Attention", duration: "10 MIN", subtitle: "7 DAYS OF CALM", newDuration: '10:30'  },
  { id: 2, title: "Female Body Scan", duration: "5 MIN", subtitle: "7 DAYS OF CALM", newDuration: '5:30'  },
  { id: 3, title: "Making Happiness", duration: "3 MIN", subtitle: "7 DAYS OF CALM", newDuration: '3:30'  },
];
