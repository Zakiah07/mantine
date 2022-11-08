import { Chip } from "@mantine/core";
import { useEffect, useState } from "react";

function ChipsExample() {
    const [value, setValue] = useState(['react']);

    useEffect(() => {
        console.log(value)
    }, [value])

    return (
        <div>
            <Chip.Group spacing="lg" value={value} onChange={setValue} multiple>
                <Chip color="red" variant="filled" size="xl" radius="xs" value="react">React</Chip>
                <Chip color="red" variant="filled" size="xl" radius="xs" value="ng">Angular</Chip>
                <Chip color="red" variant="filled" size="xl" radius="xs" value="svelte">Svelte</Chip>
                <Chip color="red" variant="filled" size="xl" radius="xs" value="vue">Vue</Chip>
            </Chip.Group>
        </div>
    );
}

export default ChipsExample;