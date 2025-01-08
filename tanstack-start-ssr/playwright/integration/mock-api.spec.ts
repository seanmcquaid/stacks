import { test, expect } from './extensions';

test('Tests against a mocked API in the browser', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.getByRole('link', { name: 'Kitchen Sink' }).click();
  const post = page.getByText('sunt');
  await expect(post).toBeHidden();
});
