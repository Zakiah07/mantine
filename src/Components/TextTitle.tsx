import { Text, Title } from "@mantine/core"

function TextTitle() {
    return (
        <div>
            <Title
                order={2}
            >THIS IS A BIG TITLE</Title>
            <Text
                size="lg"
                weight={700}
                underline transform="capitalize">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </Text>
            <Text
                variant="gradient"
                gradient={{ from: "red", to: "blue", deg: 138 }}
                size="xl"
                underline transform="capitalize">
                Aspernatur eaque commodi doloribus repellendus laboriosam sequi optio adipisci eligendi. Velit nisi iure et quam illum harum error commodi expedita impedit hic!</Text>
        </div>
    )
}

export default TextTitle;