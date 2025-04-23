import type { Meta, StoryObj } from '@storybook/react';
import { NavItemLink, NavItemDropdown, NavItemPopover, NavItemDropdownContent } from '../App';
import { NavigationMenu, Popover } from 'radix-ui';

const meta = {
  title: 'Navigation/NavItem',
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    text: { 
      control: 'text',
      description: 'The text content of the navigation item'
    }
  }
} satisfies Meta<typeof NavItemLink>;

export default meta;
type Story = StoryObj<typeof NavItemLink>;

// Simple link item
export const Link: Story = {
  args: {
    text: 'menswear'
  },
  render: (args) => (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavItemLink {...args} />
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic navigation link item used for direct navigation.',
      },
    },
  },
};

// Dropdown item with content
export const Dropdown: Story = {
  args: {
    text: 'english'
  },
  render: (args) => (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavItemDropdown {...args}>
            <NavItemDropdownContent />
          </NavItemDropdown>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dropdown navigation item that reveals a menu on hover/click.',
      },
    },
  },
};

// Popover navigation item
export const PopoverItem: Story = {
  args: {
    text: 'language'
  },
  render: (args) => (
    <NavItemPopover {...args}>
      <Popover.Content className="fixed border-1 text-[11px] p-2 ml-[-40px]">
        Language selection content
      </Popover.Content>
    </NavItemPopover>
  ),

  parameters: {
    docs: {
      description: {
        story: 'Popover navigation item that reveals content on click.',
      },
    },
  }
};
