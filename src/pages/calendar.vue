<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const title = useTitle()
const calendarUrl = ref(
  'https://calendar.google.com/calendar/embed?src=tableflip.calendar%40gmail.com&ctz=Europe%2FBerlin',
)

watch(
  () => route.query.tcg,
  () => {
    switchCalendar()
  },
  { immediate: true },
)

function switchCalendar() {
  switch (route.query.tcg) {
    case 'onepiece':
      title.value = 'One Piece TCG Events - Table Flip'
      calendarUrl.value =
        'https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FBerlin&showPrint=0&src=dGFibGVmbGlwLmNhbGVuZGFyQGdtYWlsLmNvbQ&src=MTRhZjBlZDM5YjM0OGIzOWE4OTllYzc1MzA4ZjJhYjFkZTY5NzY0MTFjZWMwZWNjZjgzOTY3MDcxMDYzMDFjMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%23f09300'
      break
    case 'pokemon':
      title.value = 'Pokémon TCG Events - Table Flip'
      calendarUrl.value =
        'https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FBerlin&showPrint=0&src=dGFibGVmbGlwLmNhbGVuZGFyQGdtYWlsLmNvbQ&src=Y2RmZTM0MTM4MjVkOWY3Zjg1MGNkMzhmNDAyNDI4MjhmZDAzNmJhMDU4N2Y1NTJkODM0MzZiYTE4YjQ2MzM2Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%23795548'
      break
    case 'gundam':
      title.value = 'Gundam TCG Events - Table Flip'
      calendarUrl.value =
        'https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FBerlin&showPrint=0&src=dGFibGVmbGlwLmNhbGVuZGFyQGdtYWlsLmNvbQ&src=OTkyNDFlMzM5MWYxNWVlNjdlMTk1ZTcwMDA5YmRhZjNjM2IxMTY4NDM2MjZkNjJhMGJkYTJkM2IzNDFlZTM3ZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%23e67c73'
      break
    case 'lorcana':
      title.value = 'Lorcana TCG Events - Table Flip'
      calendarUrl.value =
        'https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FBerlin&showPrint=0&src=dGFibGVmbGlwLmNhbGVuZGFyQGdtYWlsLmNvbQ&src=Y2M5ODBhZWZiMjMyNjQ1NDIxYjkzYjU5MzdiNTAxZDgwYzExNmYyZjEyNTY3MGY1YmU0MTViNzgwMzhjZWFkYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%23f4511e'
      break
    case 'riftbound':
      title.value = 'Riftbound TCG Events - Table Flip'
      calendarUrl.value =
        'https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FBerlin&showPrint=0&src=dGFibGVmbGlwLmNhbGVuZGFyQGdtYWlsLmNvbQ&src=NWQ2NTliNmE0ODE3NWVkODk1ZmJmNzRiNmY1NmFjNmRkNmJkNTg4ZTJjZmM3YTljNmMzNDgzOTZkZWUyZmI3YUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%239e69af'
      break
    case 'mtg':
      title.value = 'Magic The Gathering Events - Table Flip'
      calendarUrl.value =
        'https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FBerlin&showPrint=0&src=dGFibGVmbGlwLmNhbGVuZGFyQGdtYWlsLmNvbQ&src=NWU4MDQyNjVkOTRjNWQxNjY0ZTIzYTFhODJkNmQ0NGVkNmM0YzgwZjVlOWJhY2EwZmUxN2QyOTgzY2RlMWE2NUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%23d81b60'
      break
    case 'digimon':
      title.value = 'Digimon TCG Events - Table Flip'
      calendarUrl.value =
        'https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FBerlin&showPrint=0&src=dGFibGVmbGlwLmNhbGVuZGFyQGdtYWlsLmNvbQ&src=NWFhYzU3OTdkYjQ0ZjE3ZDEzODkyODc5MTcyYjRhYjBiOWEwMWY4NjhlZWZhMjM0NTg5NTU1ZDY3OTAwY2MxNkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%23b39ddb'
      break
    case 'ygo':
      title.value = 'Yu-Gi-Oh! TCG Events - Table Flip'
      calendarUrl.value =
        'https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FBerlin&showPrint=0&src=dGFibGVmbGlwLmNhbGVuZGFyQGdtYWlsLmNvbQ&src=YjViYjcxYTdkYWI2Y2I2MTQ3NTRiZTk0ZGU4NjNjMmI4ZjBkY2JjMzM3MmEzOGFhMTJjNDllMjgxYjA4ZmQyOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%23d50000'
      break
    case 'starwars':
      title.value = 'Star Wars Unlimited TCG Events - Table Flip'
      calendarUrl.value =
        'https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FBerlin&showPrint=0&src=dGFibGVmbGlwLmNhbGVuZGFyQGdtYWlsLmNvbQ&src=ZDJiZmY5MTMxMGQ0Y2EyNmYyMjljYWM2YjA5NmFlYTFjNzRlMTZmYzk1YWYxMDE5NzJmMTJmYmY5MzczMjBmNUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%23616161'
      break
    default:
      title.value = 'Events - Table Flip'
      calendarUrl.value =
        'https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FBerlin&showPrint=0&src=dGFibGVmbGlwLmNhbGVuZGFyQGdtYWlsLmNvbQ&src=NWFhYzU3OTdkYjQ0ZjE3ZDEzODkyODc5MTcyYjRhYjBiOWEwMWY4NjhlZWZhMjM0NTg5NTU1ZDY3OTAwY2MxNkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=OTkyNDFlMzM5MWYxNWVlNjdlMTk1ZTcwMDA5YmRhZjNjM2IxMTY4NDM2MjZkNjJhMGJkYTJkM2IzNDFlZTM3ZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y2M5ODBhZWZiMjMyNjQ1NDIxYjkzYjU5MzdiNTAxZDgwYzExNmYyZjEyNTY3MGY1YmU0MTViNzgwMzhjZWFkYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NWU4MDQyNjVkOTRjNWQxNjY0ZTIzYTFhODJkNmQ0NGVkNmM0YzgwZjVlOWJhY2EwZmUxN2QyOTgzY2RlMWE2NUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=MTRhZjBlZDM5YjM0OGIzOWE4OTllYzc1MzA4ZjJhYjFkZTY5NzY0MTFjZWMwZWNjZjgzOTY3MDcxMDYzMDFjMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y2RmZTM0MTM4MjVkOWY3Zjg1MGNkMzhmNDAyNDI4MjhmZDAzNmJhMDU4N2Y1NTJkODM0MzZiYTE4YjQ2MzM2Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NWQ2NTliNmE0ODE3NWVkODk1ZmJmNzRiNmY1NmFjNmRkNmJkNTg4ZTJjZmM3YTljNmMzNDgzOTZkZWUyZmI3YUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZDJiZmY5MTMxMGQ0Y2EyNmYyMjljYWM2YjA5NmFlYTFjNzRlMTZmYzk1YWYxMDE5NzJmMTJmYmY5MzczMjBmNUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YjViYjcxYTdkYWI2Y2I2MTQ3NTRiZTk0ZGU4NjNjMmI4ZjBkY2JjMzM3MmEzOGFhMTJjNDllMjgxYjA4ZmQyOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%23b39ddb&color=%23e67c73&color=%23f4511e&color=%23d81b60&color=%23f09300&color=%23795548&color=%239e69af&color=%23616161&color=%23d50000'
  }
}
</script>

<template>
  <div>
    <h1 style="text-align: center">Kalender</h1>
    <iframe
      :src="calendarUrl"
      style="border: 0"
      width="100%"
      height="600"
      frameborder="0"
      scrolling="no"
    />
  </div>
</template>
