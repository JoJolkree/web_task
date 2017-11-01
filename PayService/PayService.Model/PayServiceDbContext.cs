using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using PayService.Model.Data;

namespace PayService.Model
{
	public class PayServiceDbContext : DbContext
	{
		public DbSet<Transaction> Transactions { get; set; }
		public DbSet<Request> Requests { get; set; }
	}
}