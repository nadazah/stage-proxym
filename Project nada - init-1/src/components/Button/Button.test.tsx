import { describe, it, expect, vi } from 'vitest';
import { render, screen, userEvent } from 'utils/test-utils';
import { Button } from '@chakra-ui/react';
describe('Button', () => {
	it('test clicking the button triggers the onClick function', async () => {
		const onClick = vi.fn();
		render(<Button onClick={onClick}>Submit</Button>);
		const SubmitBtn = screen.getByText('Submit');
		expect(SubmitBtn).toBeDefined();
		await userEvent.click(SubmitBtn);
		expect(onClick).toBeCalledTimes(1);
	});
});
