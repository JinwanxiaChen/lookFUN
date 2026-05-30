import { create } from 'zustand';
import { cities, capsules, activities, myActivities, myCapsules, currentUser } from '@/data/mockData';
import type { Activity, Capsule } from '@/data/mockData';

interface AppState {
  // User
  currentUser: typeof currentUser;
  isLoggedIn: boolean;

  // City
  selectedCityId: string;
  selectedCityName: string;
  setSelectedCity: (cityId: string) => void;

  // Navigation
  activeTab: string;
  setActiveTab: (tab: string) => void;

  // My Activities
  myActivities: Activity[];
  addMyActivity: (activityId: string) => void;

  // My Capsules
  myCapsules: Capsule[];
  addMyCapsule: (capsuleId: string) => void;

  // Data getters
  getCapsuleById: (id: string) => Capsule | undefined;
  getActivityById: (id: string) => Activity | undefined;
  getActivitiesByCapsule: (capsuleId: string) => Activity[];
  getFeaturedActivities: () => Activity[];
}

const initialMyActivities = activities.filter(a => myActivities.includes(a.id));
const initialMyCapsules = capsules.filter(c => myCapsules.includes(c.id));

export const useStore = create<AppState>((set) => ({
  // User
  currentUser,
  isLoggedIn: true,

  // City - default to Maoming
  selectedCityId: cities[0].id,
  selectedCityName: cities[0].name,
  setSelectedCity: (cityId: string) => {
    const city = cities.find(c => c.id === cityId);
    if (city) {
      set({ selectedCityId: cityId, selectedCityName: city.name });
    }
  },

  // Navigation
  activeTab: 'explore',
  setActiveTab: (tab: string) => set({ activeTab: tab }),

  // My Activities
  myActivities: initialMyActivities,
  addMyActivity: (activityId: string) => {
    const activity = activities.find(a => a.id === activityId);
    if (activity) {
      set(state => ({
        myActivities: [...state.myActivities, activity],
      }));
    }
  },

  // My Capsules
  myCapsules: initialMyCapsules,
  addMyCapsule: (capsuleId: string) => {
    const capsule = capsules.find(c => c.id === capsuleId);
    if (capsule) {
      set(state => ({
        myCapsules: [...state.myCapsules, capsule],
      }));
    }
  },

  // Getters
  getCapsuleById: (id: string) => {
    return capsules.find(c => c.id === id);
  },
  getActivityById: (id: string) => {
    return activities.find(a => a.id === id);
  },
  getActivitiesByCapsule: (capsuleId: string) => {
    return activities.filter(a => a.capsuleId === capsuleId);
  },
  getFeaturedActivities: () => {
    return activities.filter(a => a.isFeatured);
  },
}));
