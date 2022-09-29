import Title from './Title';
import { ComponentMeta, ComponentStory } from '@storybook/react';
// import { Meta, Story } from '@storybook/react';

export default {
    title: 'Example/Title',
    component: Title
} as ComponentMeta<typeof Title>

const Template: ComponentStory<typeof Title> = (args) => <Title {...args}/>;
// export const Basic = Template.bind({});

export const Text = Template.bind({});
Text.args = {
    text: '이걸로 먹힘?'
}

/*
export const BackgroundColor = Template.bind({});
BackgroundColor.args = {
    backgroundColor: 'blue'
}
*/
