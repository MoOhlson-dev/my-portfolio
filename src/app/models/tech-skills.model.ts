export interface TechSkill {

    id: number;
    name: string;
    category: 'language' | 'tool' | 'framework/library' | 'methodology' |'platform/other';
    iconName?: string; //We only add icon name if we have an svg file icon
    text: string;
    customScale?: string; //We scale up the icon if needed.
    featured: boolean;
}