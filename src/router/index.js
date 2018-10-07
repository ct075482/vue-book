import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Index from '@/components/Index'
import Bookshelves from '@/components/Bookshelves'
import Me from '@/components/Me'
import Book from '@/components/Book'
import ReadBook from '@/components/ReadBook'
import Discover from '@/components/Discover'
import Search from '@/components/Search'
import Schedule from '@/components/Schedule'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '/',
          component: Index
        },
        {
          path: '/Bookshelves',
          component: Bookshelves
        },
        {
          path: '/Me',
          component: Me
        },
        {
          path: '/Discover',
          component: Discover
        }
      ]
    },
    {
      path: '/Book/:bookId',
      name: 'Book',
      component: Book
    },
    {
      path: '/ReadBook/:bookId/:chapterId',
      name: 'ReadBook',
      component: ReadBook
    },
    {
      path: '/Search',
      component: Search
    },
    {
      path: '/Schedule/:bookId',
      name: 'Schedule',
      component: Schedule
    }
  ]
})
