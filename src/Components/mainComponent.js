import React from 'react';
import { NewsComponent } from './newsComponents';

export const MainComponent = () => (
    <>
        <main>
            <NewsComponent header="header 1" title="title 1" description="description 1"/>
            <NewsComponent header="header 2" title="title 2" description="description 2"/>
            <NewsComponent header="header 3" title="title 3" description="description 3"/>
        </main>
    </>
)