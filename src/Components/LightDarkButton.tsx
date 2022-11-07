import { ActionIcon, useMantineColorScheme, Button } from '@mantine/core';
// import { SunIcon, MoonIcon } from '@modulz/radix-icons';

function LightAndDarkModeButton() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <ActionIcon
            variant="outline"
            color={dark ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
        >
            {dark ? (
                <Button>Turn Light</Button>
            ) : (
                <Button>Turn Dark</Button>
            )}
        </ActionIcon>
    );
}
export default LightAndDarkModeButton;