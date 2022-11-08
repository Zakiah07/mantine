import { useState } from 'react';
import {
    AppShell,
    Navbar,
    Header,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
} from '@mantine/core';
import LightAndDarkModeButton from './LightDarkButton';
// import TableExample from './TableExample';
import ChipsExample from './ChipsExample';
import InputExample from './Input';
import TextTitle from './TextTitle';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"
import CalendarExample from './CalendarExample';
import TimeExample from './TimeExample';
import NotificationsExample from './NotificationsExample';

function AppShellExample() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);

    return (
        <Router>
            <AppShell
                styles={{
                    main: {
                        background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                    },
                }}
                navbarOffsetBreakpoint="sm"
                fixed
                navbar={
                    <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 500, lg: 400 }}>
                        <Navbar.Section>
                            <Text>Hi this is the title</Text>
                        </Navbar.Section>
                        <Navbar.Section grow mt="lg">
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <Text component={Link} variant="link" to="/">
                                    Home Page
                                </Text>
                                <Text component={Link} variant="link" to="/input">
                                    Input Page
                                </Text>
                                <Text component={Link} variant="link" to="/titlePage">
                                    Title Page
                                </Text>
                                <Text component={Link} variant="link" to="/calendarPage">
                                    Calendar Page
                                </Text>
                                <Text component={Link} variant="link" to="/timePage">
                                    Time Page
                                </Text>
                                <Text component={Link} variant="link" to="/notificationPage">
                                    Notification Page
                                </Text>
                            </div>
                        </Navbar.Section>
                        <Navbar.Section>
                            <Text>Footer</Text>
                        </Navbar.Section>
                    </Navbar>
                }
                header={
                    <Header height={70} p="md" >
                        <div style={{ display: 'flex', justifyContent: "space-between" }}>
                            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                                <Burger
                                    opened={opened}
                                    onClick={() => setOpened((o) => !o)}
                                    size="sm"
                                    color={theme.colors.gray[6]}
                                    mr="xl"
                                />
                            </MediaQuery>

                            <Text>Application header</Text>
                            <LightAndDarkModeButton />
                        </div>
                    </Header >
                }
            >
                {/* <TableExample /> */}
                <Routes>
                    <Route path="/" element={<ChipsExample />} />
                    <Route path="/input" element={<InputExample />} />
                    <Route path="/titlePage" element={<TextTitle />} />
                    <Route path="/calendarPage" element={<CalendarExample />} />
                    <Route path="/timePage" element={<TimeExample />} />
                    <Route path="/notificationPage" element={<NotificationsExample />} />
                </Routes>
            </AppShell >
        </Router >
    );
}

export default AppShellExample;