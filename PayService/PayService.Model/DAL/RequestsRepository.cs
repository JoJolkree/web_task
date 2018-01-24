using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Linq.Expressions;
using PayService.Model.Data;
using PayService.Model.Data.Embed;

namespace PayService.Model.DAL
{
	public class RequestsRepository : BaseRepository<Request>
	{
		public RequestsRepository(PayServiceDbContext dbContext) : base(dbContext)
		{
		}

		public void AddRequest(string individualNumber, string bankNumber, string accountNumber, string purposeOfPayment, Vat vat,
			int amount, string phoneNumber, string email)
		{
			AddRequest(new Request(individualNumber, bankNumber, accountNumber, purposeOfPayment, vat, amount, phoneNumber, email));
		}

		public void AddRequest(Request request)
		{
			DbContext.Requests.Add(request);
			DbContext.SaveChanges();
		}

		public void RemoveRequest(int id)
		{
			DbContext.Remove(DbContext.Requests.First(x => x.Id == id));
			DbContext.SaveChanges();
		}

		public IEnumerable<Request> Sort(string field)
		{
			return Sort(DbContext.Requests.OrderBy, field);
		}

		public IEnumerable<Request> SortByDescending(string field)
		{
			return Sort(DbContext.Requests.OrderByDescending, field);
		}

		private static IEnumerable<Request> Sort(Func<Expression<Func<Request, IComparable>>, IEnumerable<Request>> orderByFunc,
			string field)
		{
			//return sortFunc(keySelector);
			switch (field.ToLowerInvariant())
			{
				case "individualnumber":
					return orderByFunc(x => x.IndividualNumber);
				case "banknumber":
					return orderByFunc(x => x.BankNumber);
				case "accountnumber":
					return orderByFunc(x => x.AccountNumber);
				case "purpose":
					return orderByFunc(x => x.PurposeOfPayment);
				case "created":
					return orderByFunc(x => x.Created);
				default:
					return null;
			}
		}
	}
}