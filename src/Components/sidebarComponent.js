import React from 'react';

export const SidebarComponent = ({ lists }) => (
    <>
        <aside class="list-group sidebar">
            {lists.map(list => (
                <a href="#" class="list-group-item list-group-item-action list-group-item-info dark">{list}</a>
            ))}
        </aside>
    </>
)