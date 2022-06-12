import React, { Dispatch, SetStateAction, useState } from 'react';
import { getNowPadded } from '../utils/dt';
import { checkin } from '../utils/api';
import * as types from '../types';
import TimeInput from './TimeInput';

interface ChildProps {
    child: types.Child;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
}

const Child = (props: ChildProps) => {
    const nowStr = getNowPadded();

    const [checkedIn, setCheckedIn] = useState(props.child.checkedIn);
    const [checkinTime, setCheckinTime] = useState(nowStr);
    const [checkoutTime, setCheckoutTime] = useState(nowStr);
    const checkinDateTime = props.child.checkinTime !== undefined ? new Date(Date.parse(props.child.checkinTime)) : null;

    const check = async (type: types.CheckType, time: string) => {
        props.setLoading(true);
        const data = await checkin(props.child.childId, type, time);
        if ('error' in data) {
            alert(data['error'])
        } else {
            setCheckedIn(prevState => !prevState)
        }
        props.setLoading(false);
    }

    return <>
        <img src={props.child.image.small} />
        {props.child.name.fullName}
        {(checkedIn && checkinDateTime !== undefined) ?
            <div>
                Checked in on {checkinDateTime?.toLocaleDateString()} at {checkinDateTime?.toLocaleTimeString()}
                <br />
                Pickup time:
                <TimeInput value={checkinTime} onChange={e => setCheckoutTime(e.target.value)} />
                <button
                    disabled={props.loading}
                    onClick={() => check(types.CheckType.Out, checkoutTime)}>
                    Check out
                </button>
            </div> :
            <div>
                Checkin time:
                <TimeInput value={checkinTime} onChange={e => setCheckinTime(e.target.value)} />
                <button
                    disabled={props.loading}
                    onClick={() => check(types.CheckType.In, checkinTime)}>
                    Check in
                </button>
            </div>
        }
        <br />
    </>
}

export default Child;