import '@/app.css';
import { Container } from './atoms/container';
import { MainContent } from './components/main-content';
import { MarkdowView } from './components/markdown-view';

function App() {
  return (
    <Container>
      <MainContent>
        <MarkdowView />
      </MainContent>
    </Container>
  );
}

export default App;
