import { expect, test } from '@playwright/test';

test('ユーザ画面に遷移して、IDを入力するとユーザの名前を表示することができる', async ({
  page,
}) => {
  await page.goto('http://localhost:3000');

  const userPageLink = page.getByText('User');

  await expect(userPageLink).toHaveAttribute('href', '/user');

  await userPageLink.click();

  await expect(page).toHaveURL(/.*user/);

  await expect(page.getByText('Leanne Graham')).toBeVisible();

  await page.getByLabel('User Id:').fill('2');
  await page.keyboard.press('Enter');

  await expect(page.getByText('Ervin Howell')).toBeVisible();
});
