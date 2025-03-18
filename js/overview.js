function updateShowMoreButton() {
    const showMoreButton = document.getElementById('show-more-activity');
    const olderPosts = document.getElementById('older-posts');
    const recentPosts = document.getElementById('recent-posts');
    
    if (olderPosts.children.length > 0) {
        showMoreButton.style.display = 'block';
        showMoreButton.addEventListener('click', () => {
            if (olderPosts.style.display === 'none') {
                olderPosts.style.display = 'block';
                showMoreButton.textContent = 'Show less activity';
            } else {
                olderPosts.style.display = 'none';
                showMoreButton.textContent = 'Show more activity';
            }
        });
    } else {
        showMoreButton.style.display = 'none';
    }
} 