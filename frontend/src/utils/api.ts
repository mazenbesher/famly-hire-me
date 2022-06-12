import * as types from '../types';

export const fetchChildren = async (): Promise<types.Group> => {
    const response = await fetch('https://app.famly.co/api/daycare/tablet/group?' + new URLSearchParams({
        accessToken: process.env.ACCESS_TOKEN,
        groupId: process.env.GROUP_ID,
        institutionId: process.env.INSTITUTION_ID,
    }))
    const data = await response.json();
    return data
}

export const checkin = async (childId:string, type: types.CheckType, time: string): Promise<types.Checkin> => {
    const response = await fetch(`https://app.famly.co/api/v2/children/${childId}/${type}?` + new URLSearchParams({
        accessToken: process.env.ACCESS_TOKEN,
        pickupTime: time,
    }), {
        'method': 'POST',
    })

    return await response.json()
}
