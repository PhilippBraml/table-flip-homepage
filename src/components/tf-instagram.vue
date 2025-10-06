<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
    "
  >
    <h1 style="margin-bottom: 1rem">
      {{ $t('instagram.title') }}
    </h1>
    <iframe
      src="https://www.instagram.com/tablefliptcg/embed"
      width="100%"
      height="440"
      style="border: none; overflow: hidden; max-width: 440px"
      scrolling="no"
      allowtransparency="true"
      allow="encrypted-media"
    />
  </div>
</template>
