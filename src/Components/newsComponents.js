import React from 'react';

export const NewsComponent = (props) => (
    <>
        <section class="card">
            <div class="card-header">
                <h3>{props.header}</h3>
            </div>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.description}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </section>
    </>
)
