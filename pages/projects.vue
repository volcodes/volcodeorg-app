<template>
    <div id="projects">
        <header class="container">
            <h1>Projects</h1>
            <div class="breadcrumb">
                <NuxtLink to="/">Overview</NuxtLink>
                <span>Projects</span>
            </div>
        </header>
    </div>
</template>

<style lang="scss" scoped>
@use "~/assets/styles/main.scss";
@use "~/assets/styles/colors";

#projects {
    min-height: 500px;

    > header {
        display: flex;
        margin: 44px auto;
        justify-content: space-between;
        align-items: center;

        .breadcrumb {
            display: flex;
            gap: 12px;

            a, span {
                text-decoration: none;
                font-size: 18px;
                color: colors.$cloudWhite;
                display: flex;
                align-items: center;
            }

            a:not(:last-child) {
                color: colors.$lightBlue;
                &:after {
                    content: "/";
                    margin-left: 12px;
                }
            }
        }
    }
}
</style>