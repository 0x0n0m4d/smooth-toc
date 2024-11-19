import '@/app.css';
import { Container } from './atoms/container';
import { MainContent } from './components/main-content';
import { MarkdowView } from './components/markdown-view';
import { PageTitle } from './components/page-title';

function App() {
  return (
    <Container>
      <MainContent>
        <PageTitle />
        <MarkdowView />
      </MainContent>
    </Container>
  );
}

export default App;
