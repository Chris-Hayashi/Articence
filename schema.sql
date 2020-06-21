CREATE TABLE [dbo].[Socaillogin](
    [Id] [int] IDENTITY(1,1) NOT NULL,
    [Name] [varchar](50) NULL,
    [Email] [varchar](50) NULL,
    [ProviderName] [varchar](50) NULL,
    [Image] [varchar](650) NULL,
    [Token] [nvarchar](650) NULL,
 CONSTRAINT [PK_Socaillogin] PRIMARY KEY CLUSTERED 
(
    [Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO