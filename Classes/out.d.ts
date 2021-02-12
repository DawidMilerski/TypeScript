declare module "Classes/arm" {
    export class Arm {
        strength: number;
        constructor(strength?: number);
        showStrength(): void;
        decreaseStrength(): void;
        increaseStrength(): void;
    }
}
declare module "Classes/back" {
    export class Back {
        strength: number;
        constructor(strength?: number);
        showStrength(): void;
        decreaseStrength(): void;
        increaseStrength(): void;
    }
}
declare module "Classes/brain" {
    export class Brain {
        iq: number;
        personalityType: string;
        constructor(personalityType: string, iq?: number);
        showData(): void;
    }
}
declare module "Classes/foot" {
    export class Foot {
        betterFoot: string;
        constructor(betterFoot?: string);
        showBetterFoot(): void;
    }
}
declare module "Classes/hand" {
    export class Hand {
        betterHand: string;
        constructor(betterHand?: string);
        showBetterHand(): void;
    }
}
declare module "Classes/head" {
    export class Head {
        hairColor: string;
        eyesColor: string;
        eyeDefect: boolean;
        constructor(hairColor: string, eyesColor: string, eyeDefect?: boolean);
        setEyeDefect(): void;
    }
}
declare module "Classes/heart" {
    export class Heart {
        heartRate: number;
        constructor(heartRate?: number);
        showHeartRate(): void;
    }
}
declare module "Classes/leg" {
    export class Leg {
        strength: number;
        constructor(strength?: number);
        showStrength(): void;
        decreaseStrength(): void;
        increaseStrength(): void;
    }
}
declare module "Classes/lungs" {
    export class Lungs {
        lungsCapacity: number;
        constructor(lungsCapacity?: number);
        showLungsCapacity(): void;
    }
}
declare module "Classes/torso" {
    export class Torso {
        chestStrength: number;
        abdominalStrength: number;
        constructor(chestStrength?: number, abdominalStrength?: number);
        showStrength(): void;
        decreaseChestStrength(): void;
        increaseChestStrength(): void;
        decreaseAbdominalStrength(): void;
        increaseAbdominalStrength(): void;
    }
}
declare module "main" { }
