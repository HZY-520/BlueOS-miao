export const SAVE_KEY = 'miao.pet.save.v1'

const DAY_MS = 24 * 60 * 60 * 1000
const MIN_STATUS = 12
const MAX_STATUS = 100
const DAILY_TAP_REWARD_LIMIT = 20

export const PET_STAGES = [
  { id: 'kitten', name: '幼猫', minDays: 0, minLevel: 1 },
  { id: 'young', name: '少年猫', minDays: 2, minLevel: 3 },
  { id: 'adult', name: '成年猫', minDays: 5, minLevel: 6 },
  { id: 'chubby', name: '圆润成年猫', minDays: 10, minLevel: 9 },
]

export const STATUS_DEFS = [
  {
    key: 'fullness',
    label: '饱腹',
    icon: '/assets/images/ui/stat_fullness.png',
    color: '#f7a24a',
  },
  {
    key: 'mood',
    label: '心情',
    icon: '/assets/images/ui/stat_mood.png',
    color: '#f77b9b',
  },
  {
    key: 'clean',
    label: '清洁',
    icon: '/assets/images/ui/stat_clean.png',
    color: '#58c5c8',
  },
  {
    key: 'energy',
    label: '精力',
    icon: '/assets/images/ui/stat_energy.png',
    color: '#f4c65b',
  },
]

export const SHOP_ITEMS = [
  {
    id: 'fish',
    name: '小鱼干',
    price: 8,
    icon: '/assets/images/ui/item_fish.png',
    desc: '饱腹 +26',
    type: 'consumable',
    effects: { fullness: 26, mood: 3 },
    exp: 8,
  },
  {
    id: 'yarn',
    name: '毛线球',
    price: 12,
    icon: '/assets/images/ui/item_yarn.png',
    desc: '心情 +26',
    type: 'consumable',
    effects: { mood: 26, energy: -5 },
    exp: 10,
  },
  {
    id: 'brush',
    name: '泡泡刷',
    price: 10,
    icon: '/assets/images/ui/item_brush.png',
    desc: '清洁 +30',
    type: 'consumable',
    effects: { clean: 30, mood: 4 },
    exp: 9,
  },
  {
    id: 'bed',
    name: '软垫',
    price: 18,
    icon: '/assets/images/ui/item_bed.png',
    desc: '精力 +32',
    type: 'consumable',
    effects: { energy: 32, fullness: -3 },
    exp: 8,
  },
  {
    id: 'bow',
    name: '蝴蝶结',
    price: 60,
    icon: '/assets/images/ui/item_bow.png',
    desc: '永久装饰',
    type: 'accessory',
    exp: 0,
  },
]

export const ACTIONS = [
  {
    id: 'feed',
    label: '喂食',
    itemId: 'fish',
    icon: '/assets/images/ui/action_feed.png',
    pose: 'happy',
  },
  {
    id: 'play',
    label: '玩耍',
    itemId: 'yarn',
    icon: '/assets/images/ui/action_play.png',
    pose: 'play_1',
  },
  {
    id: 'clean',
    label: '清洁',
    itemId: 'brush',
    icon: '/assets/images/ui/action_clean.png',
    pose: 'dirty',
  },
  {
    id: 'rest',
    label: '休息',
    itemId: 'bed',
    icon: '/assets/images/ui/action_sleep.png',
    pose: 'sleep',
  },
]

const DEFAULT_STATUS = {
  fullness: 78,
  mood: 76,
  clean: 80,
  energy: 72,
}

const DEFAULT_INVENTORY = {
  fish: 1,
  yarn: 0,
  brush: 0,
  bed: 0,
}

export function dateKey(timestamp) {
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = `${date.getMonth() + 1}`.padStart(2, '0')
  const day = `${date.getDate()}`.padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function createDefaultSave(now = Date.now()) {
  const today = dateKey(now)
  return {
    version: 1,
    petName: '',
    coins: 20,
    birthAt: now,
    lastSeenAt: now,
    level: 1,
    exp: 0,
    status: Object.assign({}, DEFAULT_STATUS),
    inventory: Object.assign({}, DEFAULT_INVENTORY),
    accessories: { bow: false },
    claimedStepsDate: today,
    claimedStepsToday: 0,
    petTapDate: today,
    petTapCount: 0,
    lastCheckInDate: '',
    checkInStreak: 0,
  }
}

export function loadSave(raw, now = Date.now()) {
  let value = raw
  if (typeof raw === 'string' && raw.length > 0) {
    try {
      value = JSON.parse(raw)
    } catch (error) {
      value = null
    }
  }
  return normalizeSave(value, now)
}

export function normalizeSave(value, now = Date.now()) {
  const fallback = createDefaultSave(now)
  const source = isObject(value) ? value : {}
  const save = Object.assign({}, fallback, source)
  const today = dateKey(now)

  save.coins = toNonNegativeInt(save.coins, fallback.coins)
  save.petName = normalizePetName(source.petName)
  save.birthAt = toNonNegativeInt(save.birthAt, now)
  save.lastSeenAt = toNonNegativeInt(save.lastSeenAt, now)
  save.level = Math.max(1, toNonNegativeInt(save.level, 1))
  save.exp = toNonNegativeInt(save.exp, 0)
  save.status = normalizeStatus(source.status)
  save.inventory = Object.assign(
    {},
    DEFAULT_INVENTORY,
    isObject(source.inventory) ? source.inventory : {}
  )
  Object.keys(DEFAULT_INVENTORY).forEach((key) => {
    save.inventory[key] = toNonNegativeInt(save.inventory[key], 0)
  })
  save.accessories = Object.assign(
    { bow: false },
    isObject(source.accessories) ? source.accessories : {}
  )
  save.accessories.bow = !!save.accessories.bow
  save.claimedStepsDate =
    typeof save.claimedStepsDate === 'string' ? save.claimedStepsDate : today
  save.claimedStepsToday = toNonNegativeInt(save.claimedStepsToday, 0)
  if (save.claimedStepsDate !== today) {
    save.claimedStepsDate = today
    save.claimedStepsToday = 0
  }
  save.petTapDate =
    typeof save.petTapDate === 'string' ? save.petTapDate : today
  save.petTapCount = toNonNegativeInt(save.petTapCount, 0)
  if (save.petTapDate !== today) {
    save.petTapDate = today
    save.petTapCount = 0
  }
  save.lastCheckInDate =
    typeof save.lastCheckInDate === 'string' ? save.lastCheckInDate : ''
  save.checkInStreak = Math.max(
    0,
    Math.min(6, toNonNegativeInt(save.checkInStreak, 0))
  )

  return save
}

export function applyOfflineDecay(value, now = Date.now()) {
  const save = normalizeSave(value, now)
  const elapsed = Math.max(0, now - save.lastSeenAt)
  const hours = Math.min(24, elapsed / (60 * 60 * 1000))
  if (hours >= 1) {
    save.status.fullness = clampStatus(
      save.status.fullness - Math.floor(hours * 2)
    )
    save.status.mood = clampStatus(save.status.mood - Math.floor(hours * 1.3))
    save.status.clean = clampStatus(save.status.clean - Math.floor(hours * 1.4))
    save.status.energy = clampStatus(
      save.status.energy - Math.floor(hours * 1.1)
    )
  }
  save.lastSeenAt = now
  return save
}

export function getCheckInPreview(value, now = Date.now()) {
  const save = normalizeSave(value, now)
  const today = dateKey(now)
  if (save.lastCheckInDate === today) {
    return {
      available: false,
      cycleDay: save.checkInStreak || 7,
      coins: 0,
      rewardText: '已签',
      nextText: '明天再来',
    }
  }

  const cycleDay = getNextCheckInDay(save, today)
  const coins = getCheckInCoins(cycleDay)
  return {
    available: true,
    cycleDay,
    coins,
    rewardText: `+${coins}`,
    nextText: `第${cycleDay}天`,
  }
}

export function claimDailyCheckIn(value, now = Date.now(), rng = Math.random) {
  const save = normalizeSave(value, now)
  const today = dateKey(now)
  const preview = getCheckInPreview(save, now)
  if (!preview.available) {
    return {
      save,
      didClaim: false,
      pose: 'happy',
      message: '今天已经签到啦',
    }
  }

  save.coins += preview.coins
  save.lastCheckInDate = today
  save.checkInStreak = preview.cycleDay === 7 ? 0 : preview.cycleDay
  save.lastSeenAt = now

  let bonusName = ''
  if (preview.cycleDay === 7) {
    const bonusItem = pickBonusItem(rng)
    save.inventory[bonusItem.id] += 1
    bonusName = bonusItem.name
  }

  return {
    save,
    didClaim: true,
    pose: 'happy',
    message:
      preview.cycleDay === 7
        ? `签到 +${preview.coins} 猫币，额外获得${bonusName}`
        : `签到 +${preview.coins} 猫币`,
  }
}

export function getRedeemPreview(value, todaySteps, now = Date.now()) {
  const save = normalizeSave(value, now)
  const steps = toNonNegativeInt(todaySteps, 0)
  const claimed = save.claimedStepsToday
  const redeemableCoins = Math.floor(Math.max(0, steps - claimed) / 100)
  return {
    todaySteps: steps,
    claimedSteps: claimed,
    redeemableCoins,
    remainderSteps: Math.max(0, steps - claimed - redeemableCoins * 100),
  }
}

export function redeemSteps(value, todaySteps, now = Date.now()) {
  const save = normalizeSave(value, now)
  const preview = getRedeemPreview(save, todaySteps, now)
  if (preview.redeemableCoins <= 0) {
    return {
      save,
      didRedeem: false,
      coins: 0,
      message: '还差一点点，100步可换1猫币',
    }
  }

  save.coins += preview.redeemableCoins
  save.claimedStepsToday = preview.claimedSteps + preview.redeemableCoins * 100
  save.claimedStepsDate = dateKey(now)
  save.lastSeenAt = now
  return {
    save,
    didRedeem: true,
    coins: preview.redeemableCoins,
    message: `兑换 ${preview.redeemableCoins} 猫币`,
  }
}

export function setPetName(value, name, now = Date.now()) {
  const save = normalizeSave(value, now)
  const petName = normalizePetName(name)
  if (!petName) {
    return {
      save,
      didSet: false,
      message: '请输入猫咪名字',
    }
  }

  save.petName = petName
  save.lastSeenAt = now
  return {
    save,
    didSet: true,
    message: `${petName}来啦`,
  }
}

export function buyShopItem(value, itemId, now = Date.now()) {
  const save = normalizeSave(value, now)
  const item = findShopItem(itemId)
  if (!item) {
    return { save, didBuy: false, message: '没有这个物品' }
  }
  if (item.type === 'accessory' && save.accessories[item.id]) {
    return { save, didBuy: false, message: '已经拥有这个装饰啦' }
  }
  if (save.coins < item.price) {
    return { save, didBuy: false, message: '猫币不够，去兑换步数吧' }
  }

  save.coins -= item.price
  if (item.type === 'accessory') {
    save.accessories[item.id] = true
  } else {
    save.inventory[item.id] += 1
  }
  save.lastSeenAt = now
  return {
    save,
    didBuy: true,
    message: `买到${item.name}`,
  }
}

export function useActionItem(value, actionId, now = Date.now()) {
  const save = normalizeSave(value, now)
  const action = ACTIONS.find((entry) => entry.id === actionId)
  if (!action) {
    return { save, didUse: false, pose: 'idle', message: '动作不存在' }
  }

  const item = findShopItem(action.itemId)
  if (!item || save.inventory[item.id] <= 0) {
    return {
      save,
      didUse: false,
      pose: action.pose,
      message: `背包没有${item ? item.name : '物资'}，请先购买`,
    }
  }

  save.inventory[item.id] -= 1
  applyEffects(save, item.effects)
  addExp(save, item.exp)
  save.lastSeenAt = now
  return {
    save,
    didUse: true,
    pose: action.pose,
    message: `${action.label}成功，经验 +${item.exp}`,
  }
}

export function tapPet(value, now = Date.now()) {
  const save = normalizeSave(value, now)
  const tapCount = Math.min(save.petTapCount, DAILY_TAP_REWARD_LIMIT)
  if (tapCount >= DAILY_TAP_REWARD_LIMIT) {
    save.petTapCount = DAILY_TAP_REWARD_LIMIT
    save.lastSeenAt = now
    return {
      save,
      didTap: false,
      pose: 'happy',
      message: `今日摸摸奖励已达上限（${DAILY_TAP_REWARD_LIMIT}/${DAILY_TAP_REWARD_LIMIT}）`,
    }
  }

  save.petTapCount = tapCount + 1
  save.petTapDate = dateKey(now)
  applyEffects(save, { mood: 1 })
  addExp(save, 1)
  save.lastSeenAt = now
  return {
    save,
    didTap: true,
    pose: 'happy',
    message: `摸摸${save.petName || '猫猫'}，好感 +1，经验 +1（${save.petTapCount}/${DAILY_TAP_REWARD_LIMIT}）`,
  }
}

export function buildViewModel(value, todaySteps = 0, now = Date.now(), pose) {
  const save = normalizeSave(value, now)
  const stageIndex = getStageIndex(save, now)
  const stage = PET_STAGES[stageIndex]
  const restingPose = pose || getRestingPose(save)
  const spritePose = restingPose === 'idle' ? 'idle_1' : restingPose
  const redeem = getRedeemPreview(save, todaySteps, now)
  const checkIn = getCheckInPreview(save, now)

  return {
    stage,
    ageDays: getAgeDays(save, now),
    expToNext: getLevelRequirement(save.level),
    statusBars: buildStatusBars(save),
    shopItems: buildShopItems(save),
    actions: buildActions(save),
    petImage: getPetSprite(stage.id, spritePose),
    petFrames: getIdleFrames(stage.id),
    isIdlePose: restingPose === 'idle',
    hasBow: !!save.accessories.bow,
    redeem,
    checkIn,
  }
}

function normalizeStatus(value) {
  const status = Object.assign({}, DEFAULT_STATUS, isObject(value) ? value : {})
  Object.keys(DEFAULT_STATUS).forEach((key) => {
    status[key] = clampStatus(toNonNegativeInt(status[key], DEFAULT_STATUS[key]))
  })
  return status
}

function normalizePetName(value) {
  if (typeof value !== 'string') {
    return ''
  }
  return Array.from(value.trim()).slice(0, 6).join('')
}

function buildStatusBars(save) {
  return STATUS_DEFS.map((item) => {
    const value = clampStatus(save.status[item.key])
    return {
      key: item.key,
      label: item.label,
      icon: item.icon,
      color: item.color,
      value,
      width: `${value}%`,
      text: `${value}`,
    }
  })
}

function buildActions(save) {
  return ACTIONS.map((action) => {
    const item = findShopItem(action.itemId)
    const count = item ? save.inventory[item.id] : 0
    return Object.assign({}, action, {
      count,
      stockText: `x${count}`,
    })
  })
}

function buildShopItems(save) {
  return SHOP_ITEMS.map((item) => {
    const owned = item.type === 'accessory' && save.accessories[item.id]
    const count = item.type === 'consumable' ? save.inventory[item.id] : 0
    return Object.assign({}, item, {
      priceText: owned ? '已拥有' : `${item.price}`,
      stockText: item.type === 'consumable' ? `背包 ${count}` : '装饰',
    })
  })
}

function findShopItem(itemId) {
  return SHOP_ITEMS.find((item) => item.id === itemId)
}

function getPetSprite(stageId, pose) {
  return `/assets/images/pet/${stageId}_${pose}.png`
}

function getIdleFrames(stageId) {
  return [
    { src: getPetSprite(stageId, 'idle_1'), duration: 520 },
    { src: getPetSprite(stageId, 'idle_2'), duration: 520 },
  ]
}

function getRestingPose(save) {
  if (save.status.energy < 25) {
    return 'sleep'
  }
  if (save.status.fullness < 30) {
    return 'hungry'
  }
  if (save.status.clean < 30) {
    return 'dirty'
  }
  if (save.status.mood > 86) {
    return 'happy'
  }
  return 'idle'
}

function applyEffects(save, effects) {
  Object.keys(effects || {}).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(save.status, key)) {
      save.status[key] = clampStatus(save.status[key] + effects[key])
    }
  })
}

function addExp(save, amount) {
  save.exp += Math.max(0, amount)
  while (save.exp >= getLevelRequirement(save.level)) {
    save.exp -= getLevelRequirement(save.level)
    save.level += 1
  }
}

function getStageIndex(save, now) {
  const ageDays = getAgeDays(save, now)
  let byDays = 0
  let byLevel = 0
  PET_STAGES.forEach((stage, index) => {
    if (ageDays >= stage.minDays) {
      byDays = index
    }
    if (save.level >= stage.minLevel) {
      byLevel = index
    }
  })
  return Math.min(byDays, byLevel)
}

function getAgeDays(save, now) {
  return Math.max(0, daysBetween(dateKey(save.birthAt), dateKey(now)))
}

function getLevelRequirement(level) {
  return 24 + (Math.max(1, level) - 1) * 10
}

function getCheckInCoins(cycleDay) {
  return 12 + Math.max(0, Math.min(cycleDay, 6) - 1) * 3
}

function getNextCheckInDay(save, today) {
  if (!isYesterday(save.lastCheckInDate, today)) {
    return 1
  }
  if (save.checkInStreak <= 0 || save.checkInStreak >= 6) {
    return save.checkInStreak === 6 ? 7 : 1
  }
  return save.checkInStreak + 1
}

function pickBonusItem(rng) {
  const candidates = SHOP_ITEMS.filter((item) => item.type === 'consumable')
  const index = Math.floor(rng() * candidates.length) % candidates.length
  return candidates[index]
}

function isYesterday(previousKey, todayKey) {
  if (!previousKey || !todayKey) {
    return false
  }
  return daysBetween(previousKey, todayKey) === 1
}

function daysBetween(startKey, endKey) {
  const start = localMidnight(startKey).getTime()
  const end = localMidnight(endKey).getTime()
  return Math.floor((end - start) / DAY_MS)
}

function localMidnight(key) {
  const parts = key.split('-').map((part) => Number(part))
  return new Date(parts[0], parts[1] - 1, parts[2])
}

function clampStatus(value) {
  return Math.max(MIN_STATUS, Math.min(MAX_STATUS, Math.round(value)))
}

function toNonNegativeInt(value, fallback) {
  const number = Number(value)
  return Number.isFinite(number) && number >= 0 ? Math.floor(number) : fallback
}

function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}
