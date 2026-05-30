export interface City {
  id: string;
  name: string;
  image: string;
}

export interface Capsule {
  id: string;
  name: string;
  tags: string[];
  memberCount: number;
  image: string;
  description: string;
}

export interface Activity {
  id: string;
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  capsuleId: string;
  capsuleName: string;
  tags: string[];
  participants: number;
  maxParticipants: number;
  price: string;
  isFeatured?: boolean;
}

export interface Review {
  id: string;
  userName: string;
  avatar: string;
  rating: number;
  text: string;
  timestamp: string;
  verified: boolean;
  capsuleId: string;
}

export const cities: City[] = [
  { id: 'maoming', name: '茂名市', image: '/city-maoming.jpg' },
  { id: 'guangzhou', name: '廣州市', image: '/city-guangzhou.jpg' },
  { id: 'shenzhen', name: '深圳市', image: '/city-shenzhen.jpg' },
  { id: 'hangzhou', name: '杭州市', image: '/city-hangzhou.jpg' },
];

export const capsules: Capsule[] = [
  {
    id: 'capsule-1',
    name: '山野行者',
    tags: ['戶外'],
    memberCount: 156,
    image: '/activity-hiking.jpg',
    description: '熱愛山野徒步的戶外愛好者聚集地',
  },
  {
    id: 'capsule-2',
    name: '親子樂園',
    tags: ['親子', '家庭'],
    memberCount: 234,
    image: '/activity-picnic.jpg',
    description: '專為親子家庭打造的活動空間',
  },
  {
    id: 'capsule-3',
    name: '靜心閱讀',
    tags: ['閱讀'],
    memberCount: 89,
    image: '/activity-reading.jpg',
    description: '在自然中享受閱讀的寧靜時光',
  },
  {
    id: 'capsule-4',
    name: '兒童探索',
    tags: ['兒童'],
    memberCount: 178,
    image: '/activity-kids.jpg',
    description: '讓孩子在自然中探索與學習',
  },
  {
    id: 'capsule-5',
    name: '騎行天下',
    tags: ['戶外'],
    memberCount: 112,
    image: '/activity-cycling.jpg',
    description: '騎行愛好者的活動社群',
  },
  {
    id: 'capsule-6',
    name: '茶道雅集',
    tags: ['家庭'],
    memberCount: 67,
    image: '/activity-tea.jpg',
    description: '以茶會友，品味東方雅韻',
  },
  {
    id: 'capsule-7',
    name: '露營者聯盟',
    tags: ['戶外'],
    memberCount: 145,
    image: '/activity-camping.jpg',
    description: '露營愛好者交流與活動平台',
  },
  {
    id: 'capsule-8',
    name: '繪本時光',
    tags: ['幼兒'],
    memberCount: 203,
    image: '/activity-reading.jpg',
    description: '親子共讀繪本的溫馨時光',
  },
];

export const activities: Activity[] = [
  {
    id: 'act-1',
    title: '週末山野徒步',
    image: '/activity-hiking.jpg',
    date: '週六',
    time: '08:00',
    location: '茂名市電白區',
    capsuleId: 'capsule-1',
    capsuleName: '山野行者',
    tags: ['戶外'],
    participants: 12,
    maxParticipants: 20,
    price: '免費',
    isFeatured: true,
  },
  {
    id: 'act-2',
    title: '親子草地野餐會',
    image: '/activity-picnic.jpg',
    date: '週日',
    time: '14:00',
    location: '茂名市森林公園',
    capsuleId: 'capsule-2',
    capsuleName: '親子樂園',
    tags: ['親子', '家庭'],
    participants: 8,
    maxParticipants: 15,
    price: '¥30',
    isFeatured: true,
  },
  {
    id: 'act-3',
    title: '樹下讀書分享會',
    image: '/activity-reading.jpg',
    date: '週六',
    time: '15:00',
    location: '茂名市圖書館後花園',
    capsuleId: 'capsule-3',
    capsuleName: '靜心閱讀',
    tags: ['閱讀'],
    participants: 6,
    maxParticipants: 12,
    price: '免費',
    isFeatured: true,
  },
  {
    id: 'act-4',
    title: '兒童自然探索營',
    image: '/activity-kids.jpg',
    date: '週六',
    time: '09:00',
    location: '茂名市植物園',
    capsuleId: 'capsule-4',
    capsuleName: '兒童探索',
    tags: ['兒童', '親子'],
    participants: 15,
    maxParticipants: 25,
    price: '¥50',
    isFeatured: true,
  },
  {
    id: 'act-5',
    title: '濱海自行車漫遊',
    image: '/activity-cycling.jpg',
    date: '週日',
    time: '07:00',
    location: '茂名市海濱大道',
    capsuleId: 'capsule-5',
    capsuleName: '騎行天下',
    tags: ['戶外'],
    participants: 10,
    maxParticipants: 18,
    price: '免費',
    isFeatured: true,
  },
  {
    id: 'act-6',
    title: '戶外茶藝體驗',
    image: '/activity-tea.jpg',
    date: '週六',
    time: '10:00',
    location: '茂名市人民公園',
    capsuleId: 'capsule-6',
    capsuleName: '茶道雅集',
    tags: ['家庭'],
    participants: 5,
    maxParticipants: 10,
    price: '¥80',
    isFeatured: false,
  },
  {
    id: 'act-7',
    title: '親子露營週末',
    image: '/activity-camping.jpg',
    date: '週六',
    time: '16:00',
    location: '茂名市西湖露營地',
    capsuleId: 'capsule-7',
    capsuleName: '露營者聯盟',
    tags: ['戶外', '家庭'],
    participants: 7,
    maxParticipants: 14,
    price: '¥120',
    isFeatured: false,
  },
  {
    id: 'act-8',
    title: '親子繪本共讀',
    image: '/activity-reading.jpg',
    date: '週日',
    time: '10:00',
    location: '茂名市兒童圖書館',
    capsuleId: 'capsule-8',
    capsuleName: '繪本時光',
    tags: ['幼兒', '親子'],
    participants: 9,
    maxParticipants: 16,
    price: '免費',
    isFeatured: false,
  },
  {
    id: 'act-9',
    title: '清晨森林瑜伽',
    image: '/activity-hiking.jpg',
    date: '週日',
    time: '06:30',
    location: '茂名市森林公園',
    capsuleId: 'capsule-1',
    capsuleName: '山野行者',
    tags: ['戶外'],
    participants: 8,
    maxParticipants: 15,
    price: '¥20',
    isFeatured: false,
  },
  {
    id: 'act-10',
    title: '兒童昆蟲觀察日',
    image: '/activity-kids.jpg',
    date: '週六',
    time: '14:00',
    location: '茂名市濕地公園',
    capsuleId: 'capsule-4',
    capsuleName: '兒童探索',
    tags: ['兒童', '親子'],
    participants: 11,
    maxParticipants: 20,
    price: '¥40',
    isFeatured: false,
  },
  {
    id: 'act-11',
    title: '黃昏湖邊騎行',
    image: '/activity-cycling.jpg',
    date: '週日',
    time: '17:00',
    location: '茂名市西湖公園',
    capsuleId: 'capsule-5',
    capsuleName: '騎行天下',
    tags: ['戶外'],
    participants: 14,
    maxParticipants: 25,
    price: '免費',
    isFeatured: false,
  },
  {
    id: 'act-12',
    title: '夏日親子戲水',
    image: '/activity-picnic.jpg',
    date: '週六',
    time: '11:00',
    location: '茂名市海濱公園',
    capsuleId: 'capsule-2',
    capsuleName: '親子樂園',
    tags: ['親子', '家庭'],
    participants: 18,
    maxParticipants: 30,
    price: '¥25',
    isFeatured: false,
  },
];

export const reviews: Review[] = [
  {
    id: 'rev-1',
    userName: '小雨',
    avatar: '/avatar-1.jpg',
    rating: 5,
    text: '非常棒的徒步活動！領隊很專業，路線風景優美，認識了很多志同道合的朋友。',
    timestamp: '2024-03-15',
    verified: true,
    capsuleId: 'capsule-1',
  },
  {
    id: 'rev-2',
    userName: '山林行者',
    avatar: '/avatar-2.jpg',
    rating: 5,
    text: '孩子玩得很開心，活動安排很用心，下次還會參加！',
    timestamp: '2024-03-10',
    verified: true,
    capsuleId: 'capsule-2',
  },
  {
    id: 'rev-3',
    userName: '書香滿園',
    avatar: '/avatar-3.jpg',
    rating: 4,
    text: '在樹下讀書的感覺太棒了，氛圍很好，推薦給所有愛書人。',
    timestamp: '2024-03-08',
    verified: true,
    capsuleId: 'capsule-3',
  },
  {
    id: 'rev-4',
    userName: '探索小達人',
    avatar: '/avatar-4.jpg',
    rating: 5,
    text: '孩子學到了很多自然知識，導師很有耐心，活動設計很有教育意義。',
    timestamp: '2024-03-05',
    verified: true,
    capsuleId: 'capsule-4',
  },
  {
    id: 'rev-5',
    userName: '騎行俠',
    avatar: '/avatar-5.jpg',
    rating: 4,
    text: '路線規劃不錯，風景很美，但建議可以增加休息點。',
    timestamp: '2024-03-01',
    verified: false,
    capsuleId: 'capsule-5',
  },
  {
    id: 'rev-6',
    userName: '茶韻飄香',
    avatar: '/avatar-1.jpg',
    rating: 5,
    text: '茶藝師很專業，學到了很多茶道知識，環境也很優美。',
    timestamp: '2024-02-28',
    verified: true,
    capsuleId: 'capsule-6',
  },
  {
    id: 'rev-7',
    userName: '露營達人',
    avatar: '/avatar-2.jpg',
    rating: 5,
    text: '露營設備齊全，晚上看星星太美了！',
    timestamp: '2024-02-25',
    verified: true,
    capsuleId: 'capsule-7',
  },
  {
    id: 'rev-8',
    userName: '繪本媽媽',
    avatar: '/avatar-3.jpg',
    rating: 5,
    text: '孩子很喜歡繪本故事時間，講師講得很生動！',
    timestamp: '2024-02-20',
    verified: true,
    capsuleId: 'capsule-8',
  },
];

export const currentUser = {
  id: 'user-1',
  name: '小明',
  avatar: '/avatar-4.jpg',
  phone: '138****8888',
};

export const myActivities = ['act-1', 'act-3', 'act-6'];
export const myCapsules = ['capsule-1', 'capsule-3'];
