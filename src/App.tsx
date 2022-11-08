import './App.css';
// import Cards from './Components/Cards';
import { ColorSchemeProvider, MantineProvider, ColorScheme, Paper } from "@mantine/core"
import { useLocalStorage, useHotkeys } from '@mantine/hooks';
// import Buttons from './Components/Buttons';
import AppShellExample from './Components/AppShell';

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-clor-scheme',
    defaultValue: 'light',
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['Ctrl+J', () => toggleColorScheme]])

  return (
    <div className="App">
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }}>
          <Paper>
            <AppShellExample />
          </Paper>
          {/* <Cards /> */}
          {/* <Buttons /> */}
        </MantineProvider>
      </ColorSchemeProvider>
    </div >
  );
}

export default App;
