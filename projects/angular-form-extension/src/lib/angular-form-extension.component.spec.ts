import { describe, test, expect} from "@jest/globals";
import { render, screen, fireEvent } from '@testing-library/angular';
import { CounterComponent } from './angular-form-extension.component';

describe('Counter', () => {
  test('should render counter', async () => {
    await render(CounterComponent, { componentProperties: { counter: 5 } });

    expect(screen.getByText('Current Count: 5'));
  });

  test('should increment the counter on click', async () => {
    await render(CounterComponent, { componentProperties: { counter: 5 } });

    const incrementButton = screen.getByRole('button', { name: '+' });
    fireEvent.click(incrementButton);

    expect(screen.getByText('Current Count: 6'));
  });
});