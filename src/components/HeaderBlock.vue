<template>
    <header class="header container">
        <nav class="navigation">
            <router-link class="link" to="/">
                <img class="link__icon" src="@/assets/icons/space.png" alt="space">
                Home
            </router-link>
            <ul class="navigation__list">
                <li class="navigation__item">
                    <router-link class="link" to="/main">
                        Space now
                    </router-link>
                </li>
                <li class="navigation__item">
                    <router-link class="link" to="/constellation">
                        Constellation
                    </router-link>
                </li>
                <li class="navigation__item">
                    <router-link class="link" to="/articles">
                        Articles
                    </router-link>
                </li>
            </ul>
            <ul class="navigation__list">
                <li class="navigation__item">
                    <router-link class="link" to="/about">About</router-link>
                </li>
                <li>
                    <my-button>
                        <template #text>
                            Search
                        </template>
                    </my-button>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    @import '@/scss/global.scss';
    .header {
        padding: 30px 0;
    }

    .navigation__list {
        display: flex;
        align-items: center;
        gap: 35px;
    }
    .navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>