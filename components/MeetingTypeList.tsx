"use client"
import { useState } from "react";
import HomeCard from "./HomeCard"
import { useRouter } from "next/navigation";

const MeetingTypeList = () => {

    const router = useRouter();
    const [meetingState, setmeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>()

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <HomeCard
            img="/icons/add-meeting.svg"
            title="New Meeting"
            description="Start an instant meeting"
            handleClick={() => setmeetingState('isJoiningMeeting')}
            className="bg-orange-1"
        />
        <HomeCard
            img="/icons/schedule.svg"
            title="Schedule Meeting"
            description="Plan your meeting"
            handleClick={() => setmeetingState('isScheduleMeeting')}
            className="bg-blue-1"
        />
        <HomeCard
            img="/icons/recordings.svg"
            title="View Recordings"
            description="Check out your recordings"
            handleClick={() => setmeetingState('isJoiningMeeting')}
            className="bg-purple-1"
        />
        <HomeCard
            img="/icons/add-meeting.svg"
            title="New Meeting"
            description="Start an instant meeting"
            handleClick={() => router.push('/recordings')}
            className="bg-yellow-1"
        />
    </section>
  )
}

export default MeetingTypeList