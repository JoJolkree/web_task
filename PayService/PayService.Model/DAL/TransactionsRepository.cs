using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using PayService.Model.Data;
using PayService.Model.Data.Embed;

namespace PayService.Model.DAL
{
	public class TransactionsRepository : BaseRepository<Transaction>
	{
		public TransactionsRepository(PayServiceDbContext dbContext) : base(dbContext)
		{
		}

		public void AddTransaction(string cardNumber, string monthExpired, int amount, string comment, string email)
		{
			AddTransaction(new Transaction(cardNumber, monthExpired, amount, comment, email));
		}

		public void AddTransaction(Transaction transaction)
		{
			DbContext.Transactions.Add(transaction);
			DbContext.SaveChanges();
		}

		public void RemoveTransaction(int id)
		{
			DbContext.Transactions.Remove(DbContext.Transactions.First(x => x.Id == id));
			DbContext.SaveChanges();
		}

		public void ChangeStatusOfTransaction(int id, string newStatus)
		{
			DbContext.Transactions.First(x => x.Id == id).Status = newStatus;
			DbContext.SaveChanges();
		}

		public IEnumerable<Transaction> SortTransactionsBy(string field)
		{
			return Sort(DbContext.Transactions.OrderBy, field);
		}

		public IEnumerable<Transaction> SortTransactionsByDescending(string field)
		{
			return Sort(DbContext.Transactions.OrderByDescending, field);
		}

		private static IEnumerable<Transaction> Sort(Func<Expression<Func<Transaction, IComparable>>, IEnumerable<Transaction>> orderByFunc,
			string field)
		{
			//return sortFunc(keySelector);
			switch (field.ToLowerInvariant())
			{
				case "cardnumber":
					return orderByFunc(x => x.CardNumber);
				case "comment":
					return orderByFunc(x => x.Comment);
				case "created":
					return orderByFunc(x => x.Created);
				default:
					return null;
			}
		}
	}
}