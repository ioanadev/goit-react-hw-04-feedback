import { Counter } from './Counter/counter';
import { Section } from './Title/tittle';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Section title="Please leave feedback">
        <Counter />
      </Section>
    </div>
  );
};
