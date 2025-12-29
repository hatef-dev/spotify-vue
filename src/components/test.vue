<template>
    <div>
        <slot :fav="favoriteSongs"></slot>
    </div>
</template>

<script>
    export default {
        name: 'Test',
        data() {
            return {
                user: {
                    name: 'Test',
                    phone: '09123456789',
                },
                favoriteSongs: [
                    {
                        name: 'wish',
                        artist: 'Triple H',
                    },
                    {
                        name: 'rockstar',
                        artist: 'Post Malone',
                    },
                ],

            }
        }
    }
</script>