import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { createTestingPinia } from '@pinia/testing';

import { createPinia, setActivePinia } from 'pinia';
import LoginButton from '../components/LoginButton.vue';

describe('loginButton', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
  });
  it('should render', () => {
    const wrapper = mount(LoginButton, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    });
    expect(wrapper.text()).toContain('Login');
  });

  it('should be interactive', async () => {
    const wrapper = mount(LoginButton, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    });
    await wrapper.get('#login-btn').trigger('click');
    expect(wrapper.get('#login-dialog').isVisible()).toBe(true);
  });
});
