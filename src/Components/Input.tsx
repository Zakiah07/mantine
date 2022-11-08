import { TextInput, Button, Input } from "@mantine/core"

function InputExample() {
    return (
        <div>
            <TextInput
                icon={<Button>Logo 1</Button>}
                rightSection={<Button>Logo 2</Button>}
                label="The best input field"
                description="No this is the best"
                error="IT IS AN ERROR!"
                required
            />
            <Input
                component="select" />
        </div>
    )
}

export default InputExample;