import type { Meta, StoryObj } from '@storybook/react';
import { NavItemSearchContent } from '../App';
import { Popover } from 'radix-ui';

const meta = {
  title: 'Navigation/Search',
  component: NavItemSearchContent,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem', minWidth: '300px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    triggerText: {
      control: 'text',
      description: 'Text shown in the trigger button'
    },
    initialGender: {
      control: 'select',
      options: ['menswear', 'womenswear', 'everything else'],
      description: 'Initial selected gender option'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the search input'
    }
  },
  tags: ['autodocs'],
} satisfies Meta<{
  triggerText: string;
  initialGender?: 'menswear' | 'womenswear' | 'everything else';
  placeholder?: string;
}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchPanel: Story = {
  args: {
    triggerText: 'search',
    initialGender: 'menswear',
    placeholder: 'search menswear'
  },
  render: (args) => (
    <Popover.Root>
      <Popover.Trigger>
        <button className="mr-4 text-[12px]">{args.triggerText}</button>
      </Popover.Trigger>
      <NavItemSearchContent 
        initialGender={args.initialGender} 
        placeholder={args.placeholder}
      />
    </Popover.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Search panel with gender selection and search input field. Displays in a popover when triggered.',
      },
    },
  },
};
