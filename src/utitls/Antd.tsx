import { Item } from "Themes/utilityThemes";

export const renderTitle = (title: any) => (
     <Item fontSize='14px' color='#777777'>
          {title}
     </Item>
);

export const renderItem = (title: any, count?: any) => ({
     value: title,
     label: (
          <div
               style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '12px',
               }}
          >
               {title}
          </div>
     ),
});
