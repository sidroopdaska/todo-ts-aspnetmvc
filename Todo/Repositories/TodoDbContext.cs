﻿using Microsoft.EntityFrameworkCore;
using Todo.Models;

namespace Todo.Repositories
{
    public class TodoDbContext : DbContext
    {
        public TodoDbContext(DbContextOptions<TodoDbContext> options)
            : base(options)
        {
        }

        public DbSet<TodoItem> TodoItems { get; set; }
    }
}
