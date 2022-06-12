interface CheckinEntry {
    childCheckinId: string;
    childId: string;
    institutionId: string;
    groupId: string;
    checkinTime: string;
    pickupTime: string;
    pickupRelationId: string;
    goHomeWithChildId: string;
    checkoutTime?: null;
    checkinLoginId: string;
    checkoutLoginId: string;
    autoCheckedOut: boolean;
    deletedAt?: null;
    hours?: null;
    checkinStatements?: null;
}

interface CheckinError {
    error: string;
    errorCode: number;
    statusCode: number;
}

export type Checkin = CheckinEntry | CheckinError


export interface Child {
    childId: string;
    institutionId: string;
    groupId: string;
    createdTime: string;
    name: {
        fullName: string;
        firstName: string;
        middleName: string;
        lastName: string;
    };
    birthday: string;
    homeAddress?: null;
    extraInfo: string;
    language: string;
    nationality: string;
    birthplace: string;
    gender: number;
    startDate: string;
    endDate?: null;
    leavingReason?: null;
    email?: null;
    loginId: string;
    relations?: null;
    image: {
        small: string;
        large: string;
        empty: boolean;
    };
    isSleeping: boolean;
    naps?: (null)[] | null;
    hasVacation: boolean;
    isSick: boolean;
    isAbsent: boolean;
    leaves?: (null)[] | null;
    onBus: boolean;
    onTrip: boolean;
    statuses?: (null)[] | null;
    statusRegistrations?: (null)[] | null;
    checkins?: (Checkin)[] | null;
    checkedIn: boolean;
    checkinTime?: string;
    pickupTime?: null;
    pickupRelationId?: null;
    pickupName: string;
}

export interface Group {
    children: (Child)[];
}

export enum CheckType {
    In = 'checkins',
    Out = 'checkout'
}