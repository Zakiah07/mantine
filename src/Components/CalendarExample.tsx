import { Calendar, RangeCalendar } from "@mantine/dates";
import { useState, useEffect } from "react"
import 'dayjs/locale/en-sg'

function CalendarExample() {
    const [calendarVal, setCalendarVal] = useState<Date | null>(new Date())
    const [rangeVal, setRangeVal] = useState<[Date, Date]>([new Date(), new Date()])

    useEffect(() => {
        console.log(calendarVal)
        console.log(rangeVal)
    }, [calendarVal, rangeVal])

    return (
        <div >
            <Calendar
                styles={(theme) => ({
                    cell: {
                        border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.red[3] : theme.colors.blue[4]
                            }`,
                    },
                    day: { borderRadius: 0, height: 70, fontSize: theme.fontSizes.lg },
                    weekday: { fontSize: theme.fontSizes.lg },
                    weekdayCell: {
                        fontSize: theme.fontSizes.xl,
                        backgroundColor:
                            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
                        border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
                            }`,
                        height: 70,
                    },
                })}
                locale="en-sg" onChange={setCalendarVal} value={calendarVal} amountOfMonths={2} />
            <RangeCalendar onChange={setRangeVal} value={rangeVal} amountOfMonths={2} />
        </div >
    )
}

export default CalendarExample;