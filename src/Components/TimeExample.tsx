import { TimeInput, TimeRangeInput } from "@mantine/dates"
import { useState, useEffect } from "react"
import dayjs from "dayjs"
import { Button } from "@mantine/core"

function TimeExample() {
    const [timeInput, setTimeInput] = useState<Date | null>(new Date())
    const now = new Date();
    const then = dayjs(now).add(30, 'minutes').toDate();
    const [value, setValue] = useState<[Date, Date]>([now, then]);


    useEffect(() => {
        console.log(timeInput)
    }, [timeInput])

    return (
        <div >
            <TimeInput icon={<Button></Button>} sx={(theme) => ({
                icon: {
                    color: theme.colors.orange[7]
                },
                filledVariant: {
                    backgroundColor: theme.colors.blue[5]
                }
            })} format="12" label="this is label" description="this is a description" value={timeInput} onChange={setTimeInput} />
            <TimeRangeInput sx={(theme) => ({
                icon: {
                    color: theme.colors.orange[7]
                },
                filledVariant: {
                    backgroundColor: theme.colors.blue[5]
                }
            })} value={value} onChange={setValue} />
        </div >
    )
}

export default TimeExample;