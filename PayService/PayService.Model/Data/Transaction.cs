using System;
using PayService.Model.Data.Embed;

namespace PayService.Model.Data
{
	public class Transaction
	{
		public int Id { get; set; }
		public string CardNumber { get; set; }
		public DateTime MonthExpired { get; set; }
		public int Amount { get; set; }
		public string Comment { get; set; }
		public string Email { get; set; }
		public Status Status { get; set; }
		public DateTime Created { get; set; }

		public Transaction()
		{
			
		}
		public Transaction(string cardNumber, DateTime monthExpired, int amount, string comment, string email)
		{
			CardNumber = cardNumber;
			MonthExpired = monthExpired;
			Amount = amount;
			Comment = comment;
			Email = email;
			Status = Status.Accepted;
			Created = DateTime.Now;
		}
	}
}