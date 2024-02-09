import React from 'react';
import PageContent from '../components/PageContent'
import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {
    const error = useRouteError()

    let title = 'An Error Occured!';
    let message = 'Somrthing went wrong';
    if (error.status === 500) {
        // title = error.title;
        message = error.data.message;
    }

    if (error.status === 404) {
        title = 'Not found!';
        message = 'Could not find resoure or page';
    }
    return (
        <>
        <MainNavigation/>
        <PageContent title={title}>
            <p>{message}</p>
        </PageContent>
        </>
    );
}

export default ErrorPage;
