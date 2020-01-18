export default () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({
            title: 'This is title.',
            content: 'This is content.',
            author: '啊能.',
            url: 'https://www.baidu.com',
        }), 2000);
    });
};
